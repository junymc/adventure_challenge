# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_19_011902) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adventures", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.string "cost"
    t.string "time"
    t.string "duration"
    t.text "description"
    t.boolean "scratch", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "evidences", force: :cascade do |t|
    t.bigint "adventure_id"
    t.bigint "user_id"
    t.string "image"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["adventure_id"], name: "index_evidences_on_adventure_id"
    t.index ["user_id"], name: "index_evidences_on_user_id"
  end

  create_table "user_adventures", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "adventure_id", null: false
    t.boolean "scratch", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["adventure_id"], name: "index_user_adventures_on_adventure_id"
    t.index ["user_id"], name: "index_user_adventures_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_adventures", "adventures"
  add_foreign_key "user_adventures", "users"
end
