---
title: Introduction
---

{% assign sinatra_session = site.sessions | where:"relative_path","_sessions/sinatra.md" | first %}
{% assign requests_section = site.sections | where:"relative_path","_sections/sinatra/get_post_requests.md" | first %}
{% for session_name in site.data.sessions_order %}
  {% if session_name == "sinatra" %}
    {% assign sinatra_session_num = forloop.index %}
  {% endif %}
{% endfor %}

## Mailgun

When building a website, for example a landing page for what is to come, one vital thing to do is capture the details of people that might be interested in what you are going to launch.

Most importantly, you want to capture their email address so you can communicate things to them. In this session we will learn how to capture a user's email address (and any other details for that matter) and programmatically send them an email to confirm that they have signed up to your awesome website's newsletter!

This will be an interactive session based on what we did in [Session {{ sinatra_session_num }}]({{ sinatra_session.url }}). If you look at what we did during that session under the **{{ requests_section.title }}** section, you will see that we already learnt how to capture a user's name and email and print it out on our terminal. Now we are going to use that data to send an email.

We will be using Mailgun, an email infrastructure service - or in simpler terms, a service that enables you to programmatically send emails. We will be using a library called **Pony** to send emails via Mailgun's *SMTP* (a protocol to send and receive email, much like HTTP is a protocol to send/receive web pages) service.

You should all already have a Mailgun account, as this was your homework from last session. If not, go ahead and create an account. You will need to confirm your email (by clicking on a link in an email Mailgun sends you) and enter a verification code sent to you via text - this is Mailgun's way to safeguard against spammers creating accounts programmatically to send spam email.
