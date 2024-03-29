package resolver

import (
	"github.com/redis/go-redis/v9"
	"github.com/yahkerobertkertasnya/TPAWebBack/graph/model"
	"gorm.io/gorm"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

//go:generate go run github.com/99designs/gqlgen generate

type Resolver struct {
	DB                   *gorm.DB
	Redis                *redis.Client
	ConversationChannels []*model.ConversationChannel
}
