---
title: Task summary
---

## Task summary

{% highlight irb %}
>> x = 1
=> 1
>> x = x + 1
=> 2
{% endhighlight %}

This might seem really obvious, but it's worth pointing out: `=` is an assignment operator; it means 'set name on the left equal to the value on the right'. It isn't the same equals as you see in maths! In maths `x = x + 1` doesn't really make sense - it's an equation with no (finite) solutions. In Ruby `x = x + 1` makes perfect sense - just set `x` to be one more than it was before.

{% highlight irb %}
>> name = "Dave"
=> "Dave"
>> f = "Hello #{name}!"
=> "Hello Dave!"
>> name = "Sarah"
=> "Sarah"
>> f
=> "Hello Dave!"
{% endhighlight %}

The above shows that string interpolation happens when you write it down. When you first write `f = "Hello #{name}!"` Ruby immediately looks up `name` and bakes it straight into the string. Setting `name` to something different later on won't change this.
