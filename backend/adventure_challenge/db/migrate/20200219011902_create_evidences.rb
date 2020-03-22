class CreateEvidences < ActiveRecord::Migration[6.0]
  def change
    create_table :evidences do |t|
      t.belongs_to :adventure
      t.belongs_to :user
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
