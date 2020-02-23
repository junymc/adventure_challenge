class CreateAdventures < ActiveRecord::Migration[6.0]
  def change
    create_table :adventures do |t|
      t.string :name
      t.string :category
      t.string :cost
      t.string :time
      t.string :duration
      t.text :description
      t.boolean :scratch, default: false

      t.timestamps
    end
  end
end
