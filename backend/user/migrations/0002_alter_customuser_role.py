# Generated by Django 5.0.1 on 2024-01-06 15:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="role",
            field=models.CharField(
                choices=[
                    ("guest", "Guest"),
                    ("member", "Member"),
                    ("manager", "Manager"),
                    ("admin", "Admin"),
                ],
                default="guest",
                editable=False,
                max_length=20,
            ),
        ),
    ]
