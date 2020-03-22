class Adventure < ApplicationRecord
    has_many :users, through: :user_adventures
    has_many :evidences
end