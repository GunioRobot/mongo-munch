
describe 'Database', ->

  beforeEach ->
    this.database = new window.App.Models.Database {name:'test'}

  it 'should render the database', ->
    expect(this.database.get('name')).toEqual('test')
