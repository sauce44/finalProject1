# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.create([
  { team_name: "Red Team", team_id: 1 },
  { team_name: "Blue Team", team_id: 2 }
])

User.create([
  { user_email: "blahblahblah@gmail.com", user_name: "blahblah25", password: "abcdef123", team: false, user_id: 1 },
  { user_email: "blahblahblah1@gmail.com", user_name: "blahblah2", password: "abcdef12", team: false, user_id: 2 },
  { user_email: "blahblahblah2@gmail.com", user_name: "blahblah", password: "abcdef1", team: false, user_id: 3 },
  { user_email: "blahblahblah3@gmail.com", user_name: "blahbla", password: "abcdef", team: false, user_id: 4 },
])

Post.create([
  { user_name: "blahblah", team_name: "blahblah25", post_content: "asasfasdfvjanv.skjvndljkvnasdlvkjvdasvnbasdzlvkjandvkl", post_id: 1 },
  { user_name: "blahbla", team_name: "blahb", post_content: "asasfasdfvjanv.skjvndljkvnasdlvkjvdasvnbasdzlvkjandvkl", post_id: 2 },
  { user_name: "bvsd", team_name: "bla", post_content: "asasfasdfvjanv.skjvndljkvnasdlvkjvdasvnbasdzlvkjandvkl", post_id: 3 },
  { user_name: "blahb", team_name: "blah", post_content: "asasfasdfvjanv.skjvndljkvnasdlvkjvdasvnbasdzlvkjandvkl", post_id: 4},
])

Comment.create([
    { user_name: "blahblah", team_name: "fadsfdsf", comment_content: "sadfadsfasdf", comment_id: 1 },
    { user_name: "blahb", team_name: "fadf", comment_content: "sadfadsdf", comment_id: 2 },
    { user_name: "bl", team_name: "f", comment_content: "sadfad", comment_id: 3 }
])