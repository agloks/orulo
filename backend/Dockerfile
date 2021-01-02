FROM ruby:2.7.2-alpine

# Minimal requirements to run a Rails app
RUN apk add --no-cache --update build-base \
    linux-headers \
    bash \
    git \
    postgresql-dev \
    tzdata

# Different layer for gems installation
WORKDIR /usr/src/app
ADD Gemfile /usr/src/app
ADD Gemfile.lock /usr/src/app

RUN gem list bundler
RUN gem install bundler
RUN gem list bundler
RUN bundle install
# Copy the application into the container
COPY . /usr/src/app
EXPOSE 3000