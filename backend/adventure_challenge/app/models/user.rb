class User < ApplicationRecord
    has_many :adventures, through: :users
    has_many :evidences
end