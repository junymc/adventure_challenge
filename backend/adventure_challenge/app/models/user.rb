class User < ApplicationRecord
    has_secure_password

    has_many :adventures, through: :user_adventure

    validates :username, presence: true
    validates :username, uniqueness: true

    
end