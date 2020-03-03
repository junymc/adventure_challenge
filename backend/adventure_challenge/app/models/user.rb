class User < ApplicationRecord
    has_secure_password

    has_many :adventures, through: :users

    validates :username, presence: true
    validates :username, uniqueness: true

    
end