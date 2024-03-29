from django.contrib import admin
from task.models import Task, Project, Comment, Attachment


class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "priority",
        "status",
        "project",
        "archive",
        "created",
        "updated",
    )
    list_filter = (
        "priority",
        "status",
        "project",
        "assignees",
        "archive",
    )
    search_fields = (
        "title",
        "description",
        "priority",
        "status",
        "project",
        "assignees",
        "archive",
    )


class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "deadline",
        "owner",
        "visibility",
        "status",
        "archive",
        "created",
        "updated",
    )
    list_filter = (
        "deadline",
        "owner",
        "visibility",
        "status",
        "archive",
    )
    search_fields = (
        "title",
        "deadline",
        "owner",
        "visibility",
        "status",
        "archive",
    )


class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "text", "project", "task", "created", "updated")
    list_filter = (
        "project",
        "task",
    )
    search_fields = (
        "text",
        "project",
        "task",
    )


class AttachmentAdmin(admin.ModelAdmin):
    list_display = ("task", "project", "comment", "file", "uploader", "created")
    list_filter = (
        "task",
        "project",
        "comment",
        "uploader",
    )
    search_fields = (
        "task",
        "project",
        "comment",
        "uploader",
    )


admin.site.register(Task, TaskAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Attachment, AttachmentAdmin)
