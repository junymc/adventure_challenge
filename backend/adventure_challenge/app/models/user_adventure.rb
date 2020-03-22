class UserAdventure < ApplicationRecord
  belongs_to :user
  belongs_to :adventure

  validates_uniqueness_of :user_id, :scope => :adventure_id
end
