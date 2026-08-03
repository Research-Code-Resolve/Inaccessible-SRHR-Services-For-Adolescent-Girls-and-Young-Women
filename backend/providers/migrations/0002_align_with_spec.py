from django.db import migrations, models


def clear_existing_providers(apps, schema_editor):
    # Pre-spec test rows only stored a free-text location (e.g. "Nairobi"),
    # not coordinates, so there is nothing meaningful to backfill into
    # the new latitude/longitude fields.
    Provider = apps.get_model('providers', 'Provider')
    Provider.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Providers',
            new_name='Provider',
        ),
        migrations.RunPython(clear_existing_providers, migrations.RunPython.noop),
        migrations.RemoveField(
            model_name='provider',
            name='location',
        ),
        migrations.RemoveField(
            model_name='provider',
            name='distance_km',
        ),
        migrations.RemoveField(
            model_name='provider',
            name='rating',
        ),
        migrations.RenameField(
            model_name='provider',
            old_name='faith_sensitive',
            new_name='is_faith_sensitive',
        ),
        migrations.AlterField(
            model_name='provider',
            name='gender',
            field=models.CharField(
                choices=[
                    ('female', 'Female'),
                    ('male', 'Male'),
                    ('prefer_not_to_say', 'Prefer not to say'),
                ],
                max_length=20,
            ),
        ),
        migrations.AddField(
            model_name='provider',
            name='latitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='provider',
            name='longitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='provider',
            name='languages_spoken',
            field=models.CharField(blank=True, default='', max_length=255),
            preserve_default=False,
        ),
    ]
