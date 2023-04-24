FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email do 
      Faker::Internet.email(
        name: "#{first_name} #{last_name}",
        separators: %w[+ _ .].sample 
      )
    end
  end
end
