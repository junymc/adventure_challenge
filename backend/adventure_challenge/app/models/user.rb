class User < ApplicationRecord
    has_many :adventures, through: :users
    has_many :evidences

    has_secure_password
end