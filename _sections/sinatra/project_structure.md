---
title: Project structure
---

## Sinatra project structure

This is the recommended structure that your Sinatra projects/applications should follow:

    /your_app
        hello.rb
        /public
            /js
                hello.js
            /css
                hello.css
        /views
            hello.erb

Anything in your `public` folder is available under the root URL (`/` or `localhost:4567`). In order to reference your CSS, JavaScript and images from within your HTML then you need to do something like this:

{% highlight html+erb %}
<link rel="stylesheet" href="/css/hello.css">

<script src="/js/hello.js"></script>
{% endhighlight %}
