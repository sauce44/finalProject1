class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.integer :team_id

      t.timestamps
    end
    add_index :teams, :team_name, unique: true
  end
end
