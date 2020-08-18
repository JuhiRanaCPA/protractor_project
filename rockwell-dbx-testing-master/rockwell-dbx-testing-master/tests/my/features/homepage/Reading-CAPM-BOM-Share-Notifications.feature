@CAPM
@Regression @Smoke

Feature: Receive CAPM Notification and click into new notifications in CAPM panel 
    As a User who has had a BOM shared with me
    I want to receive a BOM Share Invite Notification in my CAPM panel and navigate into that BOM when I click that notification 
    So I quickly and easily navigate to BOMs that I have been invited to
    
    Scenario: Get Invited to a Shared BOM, Click into that CAPM notification 
        Given User navigates to the myRockwell site
        # exists
        When User opens the CAPM panel
        Then User should see at least 1 BOM invite notification in the panel
        When User clicks on the BOM invite notification
        Then validate that the user is taken to the BOM details page of the BOM titled "CAPM Test Automation"