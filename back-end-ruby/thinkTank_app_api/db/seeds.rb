# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Teams.create([
  { team_name: "Red Team", team_id: 1 },
  { team_name: "Blue Team", team_id: 2 }
])

Users.create([
  { user_email: "blahblahblah@gmail.com", user_name: "blahblah25", password: "abcdef123", team: false, user_id: 1 },
  { user_email: "blahblahblah@gmail.com", user_name: "blahblah25", password: "abcdef123", team: false },
  { average_high_f: 80, average_low_f: 35, location_id: 1 },
  { average_high_f: 60, average_low_f: 44, location_id: 1 },
  { average_high_f: 71, average_low_f: 55, location_id: 1 },
  { average_high_f: 90, average_low_f: 55, location_id: 1 },
  { average_high_f: 30, average_low_f: 55, location_id: 1 },
  { average_high_f: 1, average_low_f: -20, location_id: 2 }
])