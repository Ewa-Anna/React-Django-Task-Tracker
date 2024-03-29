# Generated by Django 5.0.1 on 2024-01-16 18:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0005_delete_customtoken"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="theme",
            field=models.CharField(
                choices=[("dark_blue", "Dark Blue"), ("light_blue", "Light Blue")],
                default="dark_blue",
                editable=False,
                max_length=20,
            ),
        ),
    ]
