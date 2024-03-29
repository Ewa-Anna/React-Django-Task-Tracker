# Generated by Django 5.0.1 on 2024-01-14 11:53

import taggit.managers
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "taggit",
            "0006_rename_taggeditem_content_type_object_id_taggit_tagg_content_8fc721_idx",
        ),
        ("task", "0003_rename_attachement_attachment"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="tags",
            field=taggit.managers.TaggableManager(
                help_text="A comma-separated list of tags.",
                through="taggit.TaggedItem",
                to="taggit.Tag",
                verbose_name="Tags",
            ),
        ),
        migrations.AddField(
            model_name="project",
            name="visibility",
            field=models.CharField(
                choices=[("public", "Public"), ("private", "Private")],
                default="public",
                max_length=10,
            ),
        ),
    ]
