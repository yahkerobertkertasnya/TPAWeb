package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"fmt"
	"github.com/google/uuid"
	"time"

	"github.com/yahkerobertkertasnya/TPAWebBack/graph"
	"github.com/yahkerobertkertasnya/TPAWebBack/graph/model"
)

// CreateTextStory is the resolver for the createTextStory field.
func (r *mutationResolver) CreateTextStory(ctx context.Context, input model.NewTextStory) (*model.StoryBox, error) {

	userID := ctx.Value("UserID").(string)

	story := &model.StoryBox{
		ID:        uuid.NewString(),
		UserID:    userID,
		Text:      &input.Text,
		Font:      &input.Font,
		Color:     &input.Font,
		CreatedAt: time.Now(),
	}

	if err := r.DB.Save(&story).Error; err != nil {
		return nil, err
	}

	return story, nil
}

// CreateImageStory is the resolver for the createImageStory field.
func (r *mutationResolver) CreateImageStory(ctx context.Context, input model.NewImageStory) (*model.StoryBox, error) {

	userID := ctx.Value("UserID").(string)

	story := &model.StoryBox{
		ID:        uuid.NewString(),
		UserID:    userID,
		Image:     &input.Image,
		CreatedAt: time.Now(),
	}

	if err := r.DB.Save(&story).Error; err != nil {
		return nil, err
	}

	return story, nil
}

// GetStories is the resolver for the getStories field.
func (r *queryResolver) GetStories(ctx context.Context, username string) ([]*model.StoryBox, error) {
	var stories []*model.StoryBox
	var user *model.User

	if err := r.DB.First(&user, "username = ?", username).Error; err != nil {
		return nil, err
	}

	if err := r.DB.Find(&stories, "user_id = ?", user.ID).Error; err != nil {
		return nil, err
	}

	return stories, nil
}

// GetUserWithStories is the resolver for the getUserWithStories field.
func (r *queryResolver) GetUserWithStories(ctx context.Context) ([]*model.User, error) {
	panic(fmt.Errorf("not implemented: GetUserWithStories - getUserWithStories"))
}

// User is the resolver for the user field.
func (r *storyResolver) User(ctx context.Context, obj *model.StoryBox) (*model.User, error) {
	var user *model.User

	if err := r.DB.First(&user, "id = ?", obj.UserID).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// StoryBox returns graph.StoryResolver implementation.
func (r *Resolver) StoryBox() graph.StoryResolver { return &storyResolver{r} }

type storyResolver struct{ *Resolver }
