from django.shortcuts import render

pages = (
    'team',
    'timeline',
    'publications',
    'resources',
)


def index(request):
    return render(request, 'index.html', context={'page_id': 'index', 'pages': pages})


def team(request):
    return render(request, 'team.html', context={'page_id': 'team', 'pages': pages})


def timeline(request):
    return render(request, 'timeline.html', context={'page_id': 'timeline', 'pages': pages})


def publications(request):
    return render(request, 'publications.html', context={'page_id': 'publications', 'pages': pages})


def resources(request):
    return render(request, 'resources.html', context={'page_id': 'resources', 'pages': pages})
