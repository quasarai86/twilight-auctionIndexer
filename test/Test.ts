import assert from "assert";
import { 
  TestHelpers,
  TwilightCCADemo_AuctionStepRecorded
} from "generated";
const { MockDb, TwilightCCADemo } = TestHelpers;

describe("TwilightCCADemo contract AuctionStepRecorded event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for TwilightCCADemo contract AuctionStepRecorded event
  const event = TwilightCCADemo.AuctionStepRecorded.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("TwilightCCADemo_AuctionStepRecorded is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await TwilightCCADemo.AuctionStepRecorded.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualTwilightCCADemoAuctionStepRecorded = mockDbUpdated.entities.TwilightCCADemo_AuctionStepRecorded.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedTwilightCCADemoAuctionStepRecorded: TwilightCCADemo_AuctionStepRecorded = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      startBlock: event.params.startBlock,
      endBlock: event.params.endBlock,
      mps: event.params.mps,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualTwilightCCADemoAuctionStepRecorded, expectedTwilightCCADemoAuctionStepRecorded, "Actual TwilightCCADemoAuctionStepRecorded should be the same as the expectedTwilightCCADemoAuctionStepRecorded");
  });
});
