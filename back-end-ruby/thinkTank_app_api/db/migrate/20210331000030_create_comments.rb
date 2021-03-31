class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :user_name
      t.string :team_name
      t.string :comment_content

      t.timestamps
    end
  end
end
