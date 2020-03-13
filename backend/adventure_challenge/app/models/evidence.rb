class Evidence < ApplicationRecord
    belongs_to :adventure

    validates :adventure_id, uniqueness: true
end
