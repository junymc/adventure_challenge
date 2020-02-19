class CreateAdventures < ActiveRecord::Migration[6.0]
  def change
    create_table :adventures do |t|
      t.string :name
      t.integer :cost
      t.string :time
      t.integer :duration
      t.string :hints

      t.timestamps
    end
  end
end
