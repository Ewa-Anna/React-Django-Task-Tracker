from django.contrib.auth import get_user_model
from django.utils.timezone import now


User = get_user_model()


class SetLastUserLoggin:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            user = User.objects.get(id=request.user.id)
            user.last_loggin = now()
            user.save()
        response = self.get_response(request)
        return response
