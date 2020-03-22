class CreateUserAdventures < ActiveRecord::Migration[6.0]
  def change
    create_table :user_adventures do |t|
      t.references :user, null: false, foreign_key: true
      t.references :adventure, null: false, foreign_key: true
      t.boolean :scratch, default: true

      t.timestamps
    end
  end
end
