---
title: Introducing Ruby
---

## Introducing Ruby

Ruby is an incredibly powerful and flexible programming language. It is a modern language - created in the 1990s by Yukihiro Matsumoto (Matz). A large part of his design philosophy is centered around optimizing for developer happiness - making a language that is a pleasure to program in. Its simple syntax makes it ideal for first-time programmers.

Ruby is a popular language among startups, due to its simplicity and the fast development time it allows - [AirBnB](https://www.airbnb.com), [GitHub](https://github.com), [Twitter](https://twitter.com), [Groupon](https://www.groupon.com) have all used Ruby to build their sites.

In this course, we'll be leaning the basics of Ruby, in a web development context. We will be using a simple web framework called **Sinatra**.

## RubyGems

RubyGems is a package management system used to install and manage software packages written in Ruby. We will be using RubyGems to install things like Sinatra and any other dependencies we want to make use of. You should already have RubyGems installed as per the course preparatory work.

## Using Ruby interactively: irb

You can simply type `irb` (short for *interactive Ruby*) inside your Terminal / Command Line and hit enter to find yourself in an interactive Ruby session:

![A new irb session](/images/irb_session.png)

You can start typing some Ruby commands - for example you can use Ruby's `puts` command:

![puts 'Hello, World!'](/images/irb_hello_world.png)

You can also do some maths - give it a go!

![Some maths in irb](/images/irb_maths.png)

In a nutshell, you can interactively code in Ruby, without having to write a program, save it and run it. It's especially useful when you want to try something out.

## Comments

In Ruby, any part of a line that comes after a `#` is ignored. This is useful when you are writing complicated programs, as it allows you to write human-readable comments to document your code - this makes it easier for others to follow your code.

You can see comments being used in action:

![Comments in irb](/images/irb_comments.png)

<div class="task" markdown="1">
## Task:

1. Pair up with someone
2. Open an interactive Ruby session on one of your laptops
3. For each of the following Ruby expressions, try to agree what value you think they evaluate to. Check if you are right in `irb`.
  - `1 + 2`
  - `5 - 6`
  - `8 * 9`
  - `6 / 2`
  - `5 / 2`
  - `5.0 / 2`
  - `5 % 2`
  - `2.even?`
  - `3.even?`
  - `"hello " + "world"`
  - `"Bob" * 3`
  - `"Bob" + 3`
  - `"hello".upcase`
  - `"GOODBYE".downcase`
  - `"hello".capitalize`
</div>
