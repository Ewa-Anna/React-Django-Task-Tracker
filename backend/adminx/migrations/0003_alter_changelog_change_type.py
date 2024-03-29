# Generated by Django 5.0.1 on 2024-01-21 18:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("adminx", "0002_alter_changelog_change_type_alter_changelog_comment_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="changelog",
            name="change_type",
            field=models.CharField(
                choices=[
                    ("create", "Create"),
                    ("update", "Update"),
                    ("delete", "Delete"),
                ],
                max_length=10,
            ),
        ),
    ]
