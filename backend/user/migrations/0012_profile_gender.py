# Generated by Django 5.0.1 on 2024-02-15 20:19

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0011_alter_customuser_last_loggin"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="gender",
            field=models.CharField(
                blank=True,
                choices=[
                    ("male", "Male"),
                    ("female", "Female"),
                    ("empty", "Prefer not to say"),
                ],
                max_length=20,
            ),
        ),
    ]
