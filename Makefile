TESTS = $(shell find tests -name 'test_*.js')

test:
	@node ./node_modules/.bin/mocha -R spec -u bdd $(TESTS)

test-cov:
	@node ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha $(TESTS)

.PHONY: test test-cov
