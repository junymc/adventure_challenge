class Adventure < ApplicationRecord
    has_many :users, through: :user_adventures
end