package mdmend

import (
	"errors"
	"fmt"
)

var (
	ErrInvalidPath    = errors.New("invalid path")
	ErrFileNotFound   = errors.New("file not found")
	ErrReadFailed     = errors.New("failed to read file")
	ErrWriteFailed    = errors.New("failed to write file")
	ErrInvalidConfig  = errors.New("invalid configuration")
	ErrConfigNotFound = errors.New("config file not found")
	ErrNoInput        = errors.New("no input provided")
	ErrRuleNotFound   = errors.New("rule not found")
	ErrRuleRegistered = errors.New("rule already registered")
)

type PathError struct {
	Op   string
	Path string
	Err  error
}

func (e *PathError) Error() string {
	if e.Path != "" {
		return e.Op + " " + e.Path + ": " + e.Err.Error()
	}
	return e.Op + ": " + e.Err.Error()
}

func (e *PathError) Unwrap() error {
	return e.Err
}

func NewPathError(op, path string, err error) *PathError {
	return &PathError{Op: op, Path: path, Err: err}
}

type ConfigError struct {
	Path string
	Err  error
}

func (e *ConfigError) Error() string {
	if e.Path != "" {
		return "config " + e.Path + ": " + e.Err.Error()
	}
	return "config: " + e.Err.Error()
}

func (e *ConfigError) Unwrap() error {
	return e.Err
}

func NewConfigError(path string, err error) *ConfigError {
	return &ConfigError{Path: path, Err: err}
}

type RuleError struct {
	RuleID string
	Err    error
}

func (e *RuleError) Error() string {
	return "rule " + e.RuleID + ": " + e.Err.Error()
}

func (e *RuleError) Unwrap() error {
	return e.Err
}

func NewRuleError(ruleID string, err error) *RuleError {
	return &RuleError{RuleID: ruleID, Err: err}
}

func IsPathError(err error) bool {
	var e *PathError
	return errors.As(err, &e)
}

func IsConfigError(err error) bool {
	var e *ConfigError
	return errors.As(err, &e)
}

func IsRuleError(err error) bool {
	var e *RuleError
	return errors.As(err, &e)
}

func WrapReadError(path string, err error) error {
	return &PathError{Op: "read", Path: path, Err: fmt.Errorf("%w: %v", ErrReadFailed, err)}
}

func WrapWriteError(path string, err error) error {
	return &PathError{Op: "write", Path: path, Err: fmt.Errorf("%w: %v", ErrWriteFailed, err)}
}
