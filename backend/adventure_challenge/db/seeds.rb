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
                 description: "Wake up early in the morning and go walk on trails. Get some fresh air and feel the nature! Make sure you fill out your water bottle and pack some energy bars! But you have be 100% with nature. No cell phone and no other electrical devices. You can have it for emegency, but turn it off!!", 
                 scratch: false)
Adventure.create(name: "The helpless baker", 
                 category: "Couple", 
                 cost: "$5 - $15", 
                 time: "Anytime", 
                 duration: "2hr to 3hrs", 
                 description: "Make homemade cookies with your partner! One of you has to mix all the ingredients by youeslef.. BLINDFOLDED, while the other person gives instructions by leading with their hands. The leader only can use three directive sentences the whole time.", 
                 scratch: false)
Adventure.create(name: "Don't be a stranger", 
                 category: "Dare", 
                 cost: 0, 
                 time: "Anytime", 
                 duration: "1hr", 
                 description: "Go to park or a mall by yourslef. Just talk to rendom people with friendly conversation. Don't scare them away. I bet you will hear interesting stories. The challenge is if you can get their names and phone nunmers. If you ever get the answer 'no', you lose!",
                 scratch: false)
Adventure.create(name: "I'm your Ginie", 
                 category: "House", 
                 cost: 0, 
                 time: "Anytime", 
                 duration: "2hrs", 
                 description: "Pick one person in your family and be their Genie for 2 hours. Do whatever they say. They might ask you to clean the house, cook for them or massage them. Just make them feel good while you are serving them as they are your master. You can never say 'no' as long as they ask you to do things in the house!",
                 scratch: false)
