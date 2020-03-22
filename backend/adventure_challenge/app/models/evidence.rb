class Evidence < ApplicationRecord
    belongs_to :adventure
    belongs_to :user

    validates_uniqueness_of :user_id, :scope => :adventure_id
end
