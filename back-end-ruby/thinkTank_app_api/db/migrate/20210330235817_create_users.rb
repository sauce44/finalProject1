class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_email
      t.string :user_name
      t.string :password
      t.boolean :team

      t.timestamps
    end
    add_index :users, :user_email, unique: true
    add_index :users, :user_name, unique: true
  end
end
