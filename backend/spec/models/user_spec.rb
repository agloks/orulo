require 'rails_helper'

RSpec.describe User, type: :model do  
  subject {
    User.new(name: "testing",
             email: "hotmail@gmail.com",
             password: "a2b4c3"
            )
  }

  describe "Attributes model" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
  end

  describe "Saving model" do
    context "when valid model" do
      it "basic attributes" do  
        expect(subject).to be_valid
      end

      it "adding favorites" do
        subject.favorites << "1234"
        expect(subject).to be_valid
      end
    end
    
    context "when invalid model" do
      it "empty password" do
        subject.password = nil 
        expect(subject).to_not be_valid
      end
    end  
  end
end
