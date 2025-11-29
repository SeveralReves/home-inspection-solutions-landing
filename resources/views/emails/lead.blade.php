<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New iHome Handyman Lead</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
@php
    $logo = "https://ihomehandyman.com/build/assets/handyman-Br4zX0jx.png";
@endphp

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
        <td align="center">

            <table width="600" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                {{-- Header with Logo --}}
                <tr>
                    <td style="padding:20px 0; text-align:center; background-color:#ffffff;">
                        <img src="{{ $logo }}" alt="Golden Street Moving" style="max-width:180px; height:auto;">
                    </td>
                </tr>

                {{-- Header Title --}}
                <tr>
                    <td style="background:#0189d6; padding:20px 24px; color:#fff;">
                        <h1 style="margin:0; font-size:22px;">New iHome Handyman Request</h1>
                        <p style="margin:4px 0 0; font-size:14px;">
                            iHome Handyman – New contact from website form
                        </p>
                    </td>
                </tr>

                {{-- Intro --}}
                <tr>
                    <td style="padding:20px 24px 0;">
                        <p style="margin:0 0 12px; font-size:14px; color:#555;">
                            You’ve received a new handyman quote request with the following details:
                        </p>
                    </td>
                </tr>

                {{-- Main Data --}}
                <tr>
                    <td style="padding:0 24px 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="border-collapse:collapse; font-size:14px; color:#333;">

                            <tr>
                                <td width="35%" style="padding:6px 0; font-weight:bold;">Name:</td>
                                <td style="padding:6px 0;">{{ $quote['name'] ?? '' }}</td>
                            </tr>

                            <tr>
                                <td style="padding:6px 0; font-weight:bold;">Email:</td>
                                <td style="padding:6px 0;">{{ $quote['email'] ?? '' }}</td>
                            </tr>

                            <tr>
                                <td style="padding:6px 0; font-weight:bold;">Phone:</td>
                                <td style="padding:6px 0;">{{ $quote['phone'] ?? '' }}</td>
                            </tr>

                            <tr>
                                <td style="padding:6px 0; font-weight:bold;">Service Type:</td>
                                <td style="padding:6px 0;">{{ $quote['serviceType'] ?? '' }}</td>
                            </tr>

                            {{-- COMMENTS --}}
                            <tr>
                                <td colspan="2" style="padding:14px 0 4px; font-weight:bold; border-top:1px solid #eee;">
                                    Message:
                                </td>
                            </tr>

                            <tr>
                                <td colspan="2" style="padding:6px 0; line-height:1.5; color:#555;">
                                    {!! nl2br(e($quote['message'] ?? 'No message.')) !!}
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>

                {{-- Footer --}}
                <tr>
                    <td style="padding:16px 24px 20px; background-color:#f9f9f9; font-size:12px; color:#888; text-align:center;">
                        This email was generated automatically from the iHome Handyman website form.
                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>
</body>
</html>
