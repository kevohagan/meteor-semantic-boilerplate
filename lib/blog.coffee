Meteor.startup ->
  if Meteor.isClient
    Blog.config
      blogIndexTemplate: "indexblog"
      blogShowTemplate: "singlepost"

  if Meteor.isServer
    Blog.config
      adminRole: "admin"
      title: "My blog title"
      description: "My blog description"


