class CreateAdventures < ActiveRecord::Migration[6.0]
  def change
    create_table :adventures do |t|
      t.string :name
      t.string :category
      t.integer :cost
      t.string :time
      t.integer :duration
      t.string :hints
      t.boolean :scratch, default: false

      t.timestamps
    end
  end
end
