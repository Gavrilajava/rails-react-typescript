class User < ApplicationRecord

  def self.to_table
    {
      headers: {
        first_name: 'First Name',
        last_name: 'Last Name',
        email: 'Email',
      },
      data: all.select(:id, :first_name, :last_name, :email)
    }.to_json
  end

end
