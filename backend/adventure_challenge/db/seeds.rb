# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Adventure.create(name: "Be with the nature", 
                 category: "Sports", 
                 cost: "0", 
                 time: "Morning", 
                 duration: "30mins to 2hrs", 
                 description: "Wake up early in the morning and take a hike on a trail. Get some fresh air and enjoy nature! Make sure you fill up a water bottle and pack some energy bars or other snacks! You have to be isolated though. No cell phone or other electronic devices to distract you. Keep it with you for emergencies, but turn it off!!", 
                 scratch: false)
Adventure.create(name: "The helpless baker", 
                 category: "Couple", 
                 cost: "$5 - $15", 
                 time: "Anytime", 
                 duration: "2hr to 3hrs", 
                 description: "Make homemade cookies with your partner! One of you has to mix all the ingredients by yourself.. BLINDFOLDED, while the other person gives instructions by leading with their hands. The leader only can use three directive sentences the whole time.", 
                 scratch: false)
Adventure.create(name: "Don't be a stranger", 
                 category: "Dare", 
                 cost: 0, 
                 time: "Anytime", 
                 duration: "1hr", 
                 description: "Go to park or a mall by yourself. Talk to random people in a friendly conversation. Don't scare them away. I bet you will hear interesting stories. The challenge is if you can get their names and phone numbers. If you get denied, you lose!",
                 scratch: false)
Adventure.create(name: "I'm your Genie", 
                 category: "House", 
                 cost: 0, 
                 time: "Anytime", 
                 duration: "2hrs", 
                 description: "Pick one person in your family and be their Genie for 2 hours. Do whatever they say. They might ask you to clean the house, cook for them or massage them. You are the servant and they are the master. You can never say 'no' as long as they ask you to do things in the house and not in public.",
                 scratch: false)
