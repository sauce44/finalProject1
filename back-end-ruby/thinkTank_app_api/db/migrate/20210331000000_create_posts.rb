class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :user_name
      t.string :team_name
      t.string :post_content

      t.timestamps
    end
  end
end
