# Generated by Django 5.0.1 on 2024-02-18 11:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0012_profile_gender"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="is_configured",
            field=models.BooleanField(default=False),
        ),
    ]