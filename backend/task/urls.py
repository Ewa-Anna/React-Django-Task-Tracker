from rest_framework.routers import DefaultRouter
from django.urls import re_path
from django.urls.conf import include, path

from .views import (
    DictionaryContentView,
    ProjectDeleteView,
    ProjectOwnerList,
    ProjectAssigneeList,
    TaskAssigneeList,
    ProjectTasksView,
    CommentForTaskView,
    ProjectStatistics,
)
from .viewsets import ProjectViewSet, TaskViewSet, CommentViewSet, AttachmentViewSet


project_router = DefaultRouter()
task_router = DefaultRouter()
comment_router = DefaultRouter()
attachment_router = DefaultRouter()

project_router.register(
    r"",
    ProjectViewSet,
)

task_router.register(
    r"",
    TaskViewSet,
)

comment_router.register(
    r"",
    CommentViewSet,
)

attachment_router.register(
    r"",
    AttachmentViewSet,
)


urlpatterns = [
    re_path(r"projects/", include(project_router.urls)),
    re_path(r"tasks/", include(task_router.urls)),
    re_path(r"comments/", include(comment_router.urls)),
    re_path(r"attachments/", include(attachment_router.urls)),
    path(
        "projects/<int:project_id>/tasks/<int:task_id>/",
        TaskViewSet.as_view({"get": "retrieve"}),
        name="project-task-detail",
    ),
    path(
        "prj_task_statistics/<int:project_id>",
        ProjectStatistics.as_view(),
        name="project-task-statistics",
    ),
    path(
        "projects/<int:pk>/delete/", ProjectDeleteView.as_view(), name="project-delete"
    ),
    path(
        "tasks_of_prj/<int:project_id>",
        ProjectTasksView.as_view(),
        name="tasks-of-a-pproject",
    ),
    path("list_of_prj_owned/", ProjectOwnerList.as_view(), name="project-owner-list"),
    path(
        "list_of_prj_assignee/",
        ProjectAssigneeList.as_view(),
        name="project-assignee-list",
    ),
    path(
        "list_of_tsk_assignee/",
        TaskAssigneeList.as_view(),
        name="task-assignee-list",
    ),
    path(
        "dropdown-list/<str:dictionary_name>",
        DictionaryContentView.as_view(),
        name="dropdown-list",
    ),
    path(
        "comment-for-tasks/<int:task_id>",
        CommentForTaskView.as_view(),
        name="comment-for-task",
    ),
]
