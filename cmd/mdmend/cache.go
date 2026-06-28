package main

import (
	"fmt"

	"github.com/mohitmishra786/mdmend/internal/cache"
	"github.com/spf13/cobra"
)

func newCacheCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "cache",
		Short: "Manage the lint result cache",
	}

	cmd.AddCommand(newCacheClearCmd())
	return cmd
}

func newCacheClearCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "clear",
		Short: "Clear the lint result cache",
		RunE: func(cmd *cobra.Command, args []string) error {
			c, err := cache.Load("")
			if err != nil {
				return err
			}
			if err := c.Clear(); err != nil {
				return err
			}
			fmt.Printf("Cleared cache at %s\n", c.Path())
			return nil
		},
	}
}